import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneDocumentTypeArgs } from "./args/CreateOneDocumentTypeArgs";
import { DocumentType } from "../../../models/DocumentType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentType)
export class CreateOneDocumentTypeResolver {
  @TypeGraphQL.Mutation(_returns => DocumentType, {
    nullable: false
  })
  async createOneDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneDocumentTypeArgs): Promise<DocumentType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
