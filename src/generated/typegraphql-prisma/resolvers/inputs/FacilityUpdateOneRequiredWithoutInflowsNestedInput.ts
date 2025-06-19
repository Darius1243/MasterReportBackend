import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityCreateOrConnectWithoutInflowsInput } from "../inputs/FacilityCreateOrConnectWithoutInflowsInput";
import { FacilityUncheckedCreateWithoutInflowsInput } from "../inputs/FacilityUncheckedCreateWithoutInflowsInput";
import { FacilityUncheckedUpdateWithoutInflowsInput } from "../inputs/FacilityUncheckedUpdateWithoutInflowsInput";
import { FacilityUpsertWithoutInflowsInput } from "../inputs/FacilityUpsertWithoutInflowsInput";
import { FacilityWhereUniqueInput } from "../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.InputType("FacilityUpdateOneRequiredWithoutInflowsNestedInput", {})
export class FacilityUpdateOneRequiredWithoutInflowsNestedInput {
  @TypeGraphQL.Field(_type => FacilityUncheckedCreateWithoutInflowsInput, {
    nullable: true
  })
  create?: FacilityUncheckedCreateWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => FacilityCreateOrConnectWithoutInflowsInput, {
    nullable: true
  })
  connectOrCreate?: FacilityCreateOrConnectWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => FacilityUpsertWithoutInflowsInput, {
    nullable: true
  })
  upsert?: FacilityUpsertWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: true
  })
  connect?: FacilityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FacilityUncheckedUpdateWithoutInflowsInput, {
    nullable: true
  })
  update?: FacilityUncheckedUpdateWithoutInflowsInput | undefined;
}
