import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DocumentType } from "../../../models/DocumentType";
import { Outflow } from "../../../models/Outflow";
import { DocumentTypeOutflowsArgs } from "./args/DocumentTypeOutflowsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentType)
export class DocumentTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Outflow], {
    nullable: false
  })
  async outflows(@TypeGraphQL.Root() documentType: DocumentType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DocumentTypeOutflowsArgs): Promise<Outflow[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.findUniqueOrThrow({
      where: {
        id: documentType.id,
      },
    }).outflows({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
