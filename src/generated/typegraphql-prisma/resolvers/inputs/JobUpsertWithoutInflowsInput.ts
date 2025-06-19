import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobUncheckedCreateWithoutInflowsInput } from "../inputs/JobUncheckedCreateWithoutInflowsInput";
import { JobUncheckedUpdateWithoutInflowsInput } from "../inputs/JobUncheckedUpdateWithoutInflowsInput";
import { JobWhereInput } from "../inputs/JobWhereInput";

@TypeGraphQL.InputType("JobUpsertWithoutInflowsInput", {})
export class JobUpsertWithoutInflowsInput {
  @TypeGraphQL.Field(_type => JobUncheckedUpdateWithoutInflowsInput, {
    nullable: false
  })
  update!: JobUncheckedUpdateWithoutInflowsInput;

  @TypeGraphQL.Field(_type => JobUncheckedCreateWithoutInflowsInput, {
    nullable: false
  })
  create!: JobUncheckedCreateWithoutInflowsInput;

  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;
}
