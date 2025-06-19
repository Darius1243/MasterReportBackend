import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityCreateNestedOneWithoutInflowsInput } from "../inputs/FacilityCreateNestedOneWithoutInflowsInput";
import { PersonCreateNestedOneWithoutInflowsInput } from "../inputs/PersonCreateNestedOneWithoutInflowsInput";

@TypeGraphQL.InputType("InflowCreateWithoutJobInput", {})
export class InflowCreateWithoutJobInput {
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

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutInflowsInput, {
    nullable: false
  })
  person!: PersonCreateNestedOneWithoutInflowsInput;

  @TypeGraphQL.Field(_type => FacilityCreateNestedOneWithoutInflowsInput, {
    nullable: false
  })
  facility!: FacilityCreateNestedOneWithoutInflowsInput;
}
