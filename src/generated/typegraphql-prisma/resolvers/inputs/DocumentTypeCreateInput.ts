import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateNestedManyWithoutDocumentTypeInput } from "../inputs/OutflowCreateNestedManyWithoutDocumentTypeInput";

@TypeGraphQL.InputType("DocumentTypeCreateInput", {})
export class DocumentTypeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => OutflowCreateNestedManyWithoutDocumentTypeInput, {
    nullable: true
  })
  outflows?: OutflowCreateNestedManyWithoutDocumentTypeInput | undefined;
}
