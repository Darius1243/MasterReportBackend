import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InflowUncheckedUpdateManyInput } from "../../../inputs/InflowUncheckedUpdateManyInput";
import { InflowWhereInput } from "../../../inputs/InflowWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInflowArgs {
  @TypeGraphQL.Field(_type => InflowUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: InflowUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => InflowWhereInput, {
    nullable: true
  })
  where?: InflowWhereInput | undefined;
}
