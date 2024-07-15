import { auth } from "@/app/lib/auth/auth";
import { deleteBlogSchema, postBlogSchema } from "@/app/lib/blog-schema";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import prisma from "@/prisma/prisma";

export async function GET(request: NextRequest) {
  const postData = await prisma?.post.findMany();
  if (!postData) {
    return new NextResponse(
      JSON.stringify({
        status: "fail",
        message: "Posts Not Found",
      }),
      { status: 401 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Post Data",
      data: postData,
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = deleteBlogSchema.parse(await request.json());

    await prisma?.post.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Delete Post Data successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    if (error.code === "P2025") {
      return NextResponse.json(
        {
          success: false,
          message: "ID does not exist",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        status: "error",
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    const { content, title } = postBlogSchema.parse(await request.json());

    await prisma?.post.create({
      data: {
        title: title,
        content: content,
        authorId: session?.user?.id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Add Post Data successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        status: "error",
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
