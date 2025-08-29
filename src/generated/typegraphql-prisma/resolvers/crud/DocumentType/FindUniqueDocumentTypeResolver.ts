import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDocumentTypeArgs } from "./args/FindUniqueDocumentTypeArgs";
import { DocumentType } from "../../../models/DocumentType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentType)
export class FindUniqueDocumentTypeResolver {
  @TypeGraphQL.Query(_returns => DocumentType, {
    nullable: true
  })
  async documentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDocumentTypeArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
