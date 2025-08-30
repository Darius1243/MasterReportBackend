import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("DocumentTypeCreateWithoutOutflowsInput", {})
export class DocumentTypeCreateWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
