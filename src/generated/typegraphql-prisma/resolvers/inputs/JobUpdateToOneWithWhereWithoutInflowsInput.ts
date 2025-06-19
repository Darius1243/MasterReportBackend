import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobUncheckedUpdateWithoutInflowsInput } from "../inputs/JobUncheckedUpdateWithoutInflowsInput";
import { JobWhereInput } from "../inputs/JobWhereInput";

@TypeGraphQL.InputType("JobUpdateToOneWithWhereWithoutInflowsInput", {})
export class JobUpdateToOneWithWhereWithoutInflowsInput {
  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;

  @TypeGraphQL.Field(_type => JobUncheckedUpdateWithoutInflowsInput, {
    nullable: false
  })
  data!: JobUncheckedUpdateWithoutInflowsInput;
}
