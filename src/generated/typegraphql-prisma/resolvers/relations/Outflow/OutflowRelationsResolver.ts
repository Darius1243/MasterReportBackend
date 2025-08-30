import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DocumentType } from "../../../models/DocumentType";
import { Facility } from "../../../models/Facility";
import { Outflow } from "../../../models/Outflow";
import { Person } from "../../../models/Person";
import { OutflowDocumentTypeArgs } from "./args/OutflowDocumentTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Outflow)
export class OutflowRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async person(@TypeGraphQL.Root() outflow: Outflow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Person> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).outflow.findUniqueOrThrow({
      where: {
        id: outflow.id,
      },
    }).person({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Facility, {
    nullable: false
  })
  async facility(@TypeGraphQL.Root() outflow: Outflow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Facility> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).outflow.findUniqueOrThrow({
      where: {
        id: outflow.id,
      },
    }).facility({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => DocumentType, {
    nullable: true
  })
  async documentType(@TypeGraphQL.Root() outflow: Outflow, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: OutflowDocumentTypeArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).outflow.findUniqueOrThrow({
      where: {
        id: outflow.id,
      },
    }).documentType({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
