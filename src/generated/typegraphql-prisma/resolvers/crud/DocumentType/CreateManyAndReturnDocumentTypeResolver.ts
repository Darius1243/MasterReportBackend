import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnDocumentTypeArgs } from "./args/CreateManyAndReturnDocumentTypeArgs";
import { DocumentType } from "../../../models/DocumentType";
import { CreateManyAndReturnDocumentType } from "../../outputs/CreateManyAndReturnDocumentType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DocumentType)
export class CreateManyAndReturnDocumentTypeResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnDocumentType], {
    nullable: false
  })
  async createManyAndReturnDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnDocumentTypeArgs): Promise<CreateManyAndReturnDocumentType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
