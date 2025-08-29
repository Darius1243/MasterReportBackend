import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDocumentTypeOrThrowArgs } from "./args/FindUniqueDocumentTypeOrThrowArgs";
import { DocumentType } from "../../../models/DocumentType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentType)
export class FindUniqueDocumentTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => DocumentType, {
    nullable: true
  })
  async getDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDocumentTypeOrThrowArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
