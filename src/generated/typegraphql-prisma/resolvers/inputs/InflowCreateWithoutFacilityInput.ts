import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobCreateNestedOneWithoutInflowsInput } from "../inputs/JobCreateNestedOneWithoutInflowsInput";
import { PersonCreateNestedOneWithoutInflowsInput } from "../inputs/PersonCreateNestedOneWithoutInflowsInput";

@TypeGraphQL.InputType("InflowCreateWithoutFacilityInput", {})
export class InflowCreateWithoutFacilityInput {
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

  @TypeGraphQL.Field(_type => JobCreateNestedOneWithoutInflowsInput, {
    nullable: true
  })
  job?: JobCreateNestedOneWithoutInflowsInput | undefined;
}
