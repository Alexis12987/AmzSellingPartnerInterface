import { NextRequest, NextResponse } from "next/server";
import { getFeeds } from "sp-api/client";
import { validateQueryParams } from "validation/validateQueryParams";
import {
  SpAPIClientConfigSchema,
  GetFeedsFiltersSchema,
} from "validation/validation-schema/feed";
import z from "zod/v4";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const configValidation = validateQueryParams(
    SpAPIClientConfigSchema,
    searchParams
  );
  if (!configValidation.success) {
    return NextResponse.json(z.treeifyError(configValidation.error), {
      status: 404,
    });
  }

  const filterValidation = validateQueryParams(
    GetFeedsFiltersSchema,
    searchParams
  );

  if (!filterValidation.success) {
    return NextResponse.json(z.treeifyError(filterValidation.error), {
      status: 404,
    });
  }

  try {
    const feeds = await getFeeds(filterValidation.data, configValidation.data);
    return NextResponse.json({ feeds: feeds });
  } catch (error) {
    return NextResponse.json(
      { result: `${error.code}: ${error.message} ${error.details}` },
      { status: 404 }
    );
  }
}
