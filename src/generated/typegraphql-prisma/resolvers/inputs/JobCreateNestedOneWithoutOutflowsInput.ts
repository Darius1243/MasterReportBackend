import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobCreateOrConnectWithoutOutflowsInput } from "../inputs/JobCreateOrConnectWithoutOutflowsInput";
import { JobUncheckedCreateWithoutOutflowsInput } from "../inputs/JobUncheckedCreateWithoutOutflowsInput";
import { JobWhereUniqueInput } from "../inputs/JobWhereUniqueInput";

@TypeGraphQL.InputType("JobCreateNestedOneWithoutOutflowsInput", {})
export class JobCreateNestedOneWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => JobUncheckedCreateWithoutOutflowsInput, {
    nullable: true
  })
  create?: JobUncheckedCreateWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => JobCreateOrConnectWithoutOutflowsInput, {
    nullable: true
  })
  connectOrCreate?: JobCreateOrConnectWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: true
  })
  connect?: JobWhereUniqueInput | undefined;
}
