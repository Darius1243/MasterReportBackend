import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonUncheckedCreateInput } from "../../../inputs/PersonUncheckedCreateInput";
import { PersonUncheckedUpdateInput } from "../../../inputs/PersonUncheckedUpdateInput";
import { PersonWhereUniqueInput } from "../../../inputs/PersonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePersonArgs {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUncheckedCreateInput, {
    nullable: false
  })
  create!: PersonUncheckedCreateInput;

  @TypeGraphQL.Field(_type => PersonUncheckedUpdateInput, {
    nullable: false
  })
  update!: PersonUncheckedUpdateInput;
}
