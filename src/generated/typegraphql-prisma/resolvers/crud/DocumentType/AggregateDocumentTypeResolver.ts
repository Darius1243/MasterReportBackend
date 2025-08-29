import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDocumentTypeArgs } from "./args/AggregateDocumentTypeArgs";
import { DocumentType } from "../../../models/DocumentType";
import { AggregateDocumentType } from "../../outputs/AggregateDocumentType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentType)
export class AggregateDocumentTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateDocumentType, {
    nullable: false
  })
  async aggregateDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDocumentTypeArgs): Promise<AggregateDocumentType> {
    return getPrismaFromContext(ctx).documentType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
