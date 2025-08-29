import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDocumentTypeOrThrowArgs } from "./args/FindFirstDocumentTypeOrThrowArgs";
import { DocumentType } from "../../../models/DocumentType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentType)
export class FindFirstDocumentTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => DocumentType, {
    nullable: true
  })
  async findFirstDocumentTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDocumentTypeOrThrowArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
