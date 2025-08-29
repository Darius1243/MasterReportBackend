import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDocumentTypeArgs } from "./args/GroupByDocumentTypeArgs";
import { DocumentType } from "../../../models/DocumentType";
import { DocumentTypeGroupBy } from "../../outputs/DocumentTypeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentType)
export class GroupByDocumentTypeResolver {
  @TypeGraphQL.Query(_returns => [DocumentTypeGroupBy], {
    nullable: false
  })
  async groupByDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDocumentTypeArgs): Promise<DocumentTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
