import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeCountOutflowsArgs } from "./args/DocumentTypeCountOutflowsArgs";

@TypeGraphQL.ObjectType("DocumentTypeCount", {})
export class DocumentTypeCount {
  outflows!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "outflows",
    nullable: false
  })
  getOutflows(@TypeGraphQL.Root() root: DocumentTypeCount, @TypeGraphQL.Args() args: DocumentTypeCountOutflowsArgs): number {
    return root.outflows;
  }
}
