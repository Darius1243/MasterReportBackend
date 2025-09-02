import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobCreateOrConnectWithoutOutflowsInput } from "../inputs/JobCreateOrConnectWithoutOutflowsInput";
import { JobUncheckedCreateWithoutOutflowsInput } from "../inputs/JobUncheckedCreateWithoutOutflowsInput";
import { JobUncheckedUpdateWithoutOutflowsInput } from "../inputs/JobUncheckedUpdateWithoutOutflowsInput";
import { JobUpsertWithoutOutflowsInput } from "../inputs/JobUpsertWithoutOutflowsInput";
import { JobWhereInput } from "../inputs/JobWhereInput";
import { JobWhereUniqueInput } from "../inputs/JobWhereUniqueInput";

@TypeGraphQL.InputType("JobUpdateOneWithoutOutflowsNestedInput", {})
export class JobUpdateOneWithoutOutflowsNestedInput {
  @TypeGraphQL.Field(_type => JobUncheckedCreateWithoutOutflowsInput, {
    nullable: true
  })
  create?: JobUncheckedCreateWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => JobCreateOrConnectWithoutOutflowsInput, {
    nullable: true
  })
  connectOrCreate?: JobCreateOrConnectWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => JobUpsertWithoutOutflowsInput, {
    nullable: true
  })
  upsert?: JobUpsertWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  disconnect?: JobWhereInput | undefined;

  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  delete?: JobWhereInput | undefined;

  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: true
  })
  connect?: JobWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => JobUncheckedUpdateWithoutOutflowsInput, {
    nullable: true
  })
  update?: JobUncheckedUpdateWithoutOutflowsInput | undefined;
}
