import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { FacilityCreateOrConnectWithoutOutflowInput } from "../inputs/FacilityCreateOrConnectWithoutOutflowInput";
import { FacilityUncheckedCreateWithoutOutflowInput } from "../inputs/FacilityUncheckedCreateWithoutOutflowInput";
import { FacilityUncheckedUpdateWithoutOutflowInput } from "../inputs/FacilityUncheckedUpdateWithoutOutflowInput";
import { FacilityUpsertWithoutOutflowInput } from "../inputs/FacilityUpsertWithoutOutflowInput";
import { FacilityWhereUniqueInput } from "../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.InputType("FacilityUpdateOneRequiredWithoutOutflowNestedInput", {})
export class FacilityUpdateOneRequiredWithoutOutflowNestedInput {
  @TypeGraphQL.Field(_type => FacilityUncheckedCreateWithoutOutflowInput, {
    nullable: true
  })
  create?: FacilityUncheckedCreateWithoutOutflowInput | undefined;

  @TypeGraphQL.Field(_type => FacilityCreateOrConnectWithoutOutflowInput, {
    nullable: true
  })
  connectOrCreate?: FacilityCreateOrConnectWithoutOutflowInput | undefined;

  @TypeGraphQL.Field(_type => FacilityUpsertWithoutOutflowInput, {
    nullable: true
  })
  upsert?: FacilityUpsertWithoutOutflowInput | undefined;

  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: true
  })
  connect?: FacilityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FacilityUncheckedUpdateWithoutOutflowInput, {
    nullable: true
  })
  update?: FacilityUncheckedUpdateWithoutOutflowInput | undefined;
}
