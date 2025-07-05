import { NextRequest, NextResponse } from "next/server";
import { getFeeds } from "spApi/client";
import { validateQueryParams } from "validation/validateQueryParams";
import { SpAPIClientConfigSchema } from "validation/validation-schema/feed";
import z from "zod/v4";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const validation = validateQueryParams(
    SpAPIClientConfigSchema,
    request.nextUrl.searchParams
  );
  const params = Object.fromEntries(searchParams.entries());

  if (!validation.success) {
    return NextResponse.json(z.treeifyError(validation.error), { status: 404 });
  }

  try {
    const crotte = await getFeeds(params, validation.data);
    return NextResponse.json({ ...crotte });
  } catch (error) {
    return NextResponse.json({ result: error.message }, { status: 500 });
  }
}
