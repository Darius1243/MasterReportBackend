import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityUncheckedUpdateWithoutInflowsInput } from "../inputs/FacilityUncheckedUpdateWithoutInflowsInput";
import { FacilityWhereInput } from "../inputs/FacilityWhereInput";

@TypeGraphQL.InputType("FacilityUpdateToOneWithWhereWithoutInflowsInput", {})
export class FacilityUpdateToOneWithWhereWithoutInflowsInput {
  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  where?: FacilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => FacilityUncheckedUpdateWithoutInflowsInput, {
    nullable: false
  })
  data!: FacilityUncheckedUpdateWithoutInflowsInput;
}
