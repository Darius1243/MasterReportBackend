import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("DocumentTypeCreateInput", {})
export class DocumentTypeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
