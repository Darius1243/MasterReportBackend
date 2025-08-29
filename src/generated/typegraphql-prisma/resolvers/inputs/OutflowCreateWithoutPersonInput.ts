import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityCreateNestedOneWithoutOutflowInput } from "../inputs/FacilityCreateNestedOneWithoutOutflowInput";

@TypeGraphQL.InputType("OutflowCreateWithoutPersonInput", {})
export class OutflowCreateWithoutPersonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => FacilityCreateNestedOneWithoutOutflowInput, {
    nullable: false
  })
  facility!: FacilityCreateNestedOneWithoutOutflowInput;
}
