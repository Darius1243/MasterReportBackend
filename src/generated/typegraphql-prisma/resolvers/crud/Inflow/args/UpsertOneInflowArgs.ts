import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InflowUncheckedCreateInput } from "../../../inputs/InflowUncheckedCreateInput";
import { InflowUncheckedUpdateInput } from "../../../inputs/InflowUncheckedUpdateInput";
import { InflowWhereUniqueInput } from "../../../inputs/InflowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneInflowArgs {
  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;

  @TypeGraphQL.Field(_type => InflowUncheckedCreateInput, {
    nullable: false
  })
  create!: InflowUncheckedCreateInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateInput, {
    nullable: false
  })
  update!: InflowUncheckedUpdateInput;
}
