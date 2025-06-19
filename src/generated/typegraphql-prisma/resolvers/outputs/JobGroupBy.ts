import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobAvgAggregate } from "../outputs/JobAvgAggregate";
import { JobCountAggregate } from "../outputs/JobCountAggregate";
import { JobMaxAggregate } from "../outputs/JobMaxAggregate";
import { JobMinAggregate } from "../outputs/JobMinAggregate";
import { JobSumAggregate } from "../outputs/JobSumAggregate";

@TypeGraphQL.ObjectType("JobGroupBy", {})
export class JobGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => JobCountAggregate, {
    nullable: true
  })
  _count!: JobCountAggregate | null;

  @TypeGraphQL.Field(_type => JobAvgAggregate, {
    nullable: true
  })
  _avg!: JobAvgAggregate | null;

  @TypeGraphQL.Field(_type => JobSumAggregate, {
    nullable: true
  })
  _sum!: JobSumAggregate | null;

  @TypeGraphQL.Field(_type => JobMinAggregate, {
    nullable: true
  })
  _min!: JobMinAggregate | null;

  @TypeGraphQL.Field(_type => JobMaxAggregate, {
    nullable: true
  })
  _max!: JobMaxAggregate | null;
}
