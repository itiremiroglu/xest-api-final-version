const { sql } = require("~root/lib/database");
const { paginate, FILTERS } = require("~root/lib/paginate");

const getDoctor = async (req, res) => {
  const resultset = await paginate({
    basePath: req.path,
    baseTable: "doctor",
    selectFields: [
      "doctor.doctor_id",
      "doctor.first_name",
      "doctor.last_name",
      "doctor.specialization"
    ],
    joinStatements: [],
    sortableAttributes: [
      "doctor.doctor_id",
      "doctor.first_name",
      "doctor.last_name",
      "doctor.specialization"
    ],
    filterableAttributes: [
      {
        column: "doctor.doctor_id",
        operations: [
          FILTERS.equals,
          FILTERS.notEquals,
          FILTERS.greaterThan,
          FILTERS.greaterThanOrEqual,
          FILTERS.lessThan,
          FILTERS.lessThanOrEqual,
          FILTERS.in,
          FILTERS.notIn,
          FILTERS.between
        ]
      },
      {
        column: "doctor.first_name",
        operations: [
          FILTERS.equals,
          FILTERS.notEquals,
          FILTERS.in,
          FILTERS.notIn,
          FILTERS.contains,
          FILTERS.startsWith,
          FILTERS.endsWith,
          FILTERS.containsIgnoreCase,
          FILTERS.startsWithIgnoreCase,
          FILTERS.endsWithIgnoreCase,
          FILTERS.matchesRegExp
        ]
      },
      {
        column: "doctor.last_name",
        operations: [
          FILTERS.equals,
          FILTERS.notEquals,
          FILTERS.in,
          FILTERS.notIn,
          FILTERS.contains,
          FILTERS.startsWith,
          FILTERS.endsWith,
          FILTERS.containsIgnoreCase,
          FILTERS.startsWithIgnoreCase,
          FILTERS.endsWithIgnoreCase,
          FILTERS.matchesRegExp
        ]
      },
      {
        column: "doctor.specialization",
        operations: [
          FILTERS.equals,
          FILTERS.notEquals,
          FILTERS.isNull,
          FILTERS.isNotNull,
          FILTERS.in,
          FILTERS.notIn,
          FILTERS.contains,
          FILTERS.startsWith,
          FILTERS.endsWith,
          FILTERS.containsIgnoreCase,
          FILTERS.startsWithIgnoreCase,
          FILTERS.endsWithIgnoreCase,
          FILTERS.matchesRegExp
        ]
      }
    ],

    sortBy: req.query.sort_by,
    limit: req.query.page_size,
    page: req.query.page, // "first" | "last" | null
    direction: req.query.direction, // next | previous
    filters: req.query.filters,
    cursorValues: req.query.cursor
  });

  return res.send(resultset);
};

module.exports = getDoctor;
