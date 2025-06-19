import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobCreateOrConnectWithoutInflowsInput } from "../inputs/JobCreateOrConnectWithoutInflowsInput";
import { JobUncheckedCreateWithoutInflowsInput } from "../inputs/JobUncheckedCreateWithoutInflowsInput";
import { JobUncheckedUpdateWithoutInflowsInput } from "../inputs/JobUncheckedUpdateWithoutInflowsInput";
import { JobUpsertWithoutInflowsInput } from "../inputs/JobUpsertWithoutInflowsInput";
import { JobWhereUniqueInput } from "../inputs/JobWhereUniqueInput";

@TypeGraphQL.InputType("JobUpdateOneRequiredWithoutInflowsNestedInput", {})
export class JobUpdateOneRequiredWithoutInflowsNestedInput {
  @TypeGraphQL.Field(_type => JobUncheckedCreateWithoutInflowsInput, {
    nullable: true
  })
  create?: JobUncheckedCreateWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => JobCreateOrConnectWithoutInflowsInput, {
    nullable: true
  })
  connectOrCreate?: JobCreateOrConnectWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => JobUpsertWithoutInflowsInput, {
    nullable: true
  })
  upsert?: JobUpsertWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: true
  })
  connect?: JobWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => JobUncheckedUpdateWithoutInflowsInput, {
    nullable: true
  })
  update?: JobUncheckedUpdateWithoutInflowsInput | undefined;
}
