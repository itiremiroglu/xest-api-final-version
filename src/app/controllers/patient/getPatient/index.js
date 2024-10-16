const { sql } = require("~root/lib/database");
const { paginate, FILTERS } = require("~root/lib/paginate");

const getPatient = async (req, res) => {
  const resultset = await paginate({
    basePath: req.path,
    baseTable: "patient",
    selectFields: [
      "patient.patient_id",
      "patient.patient_name",
      "patient.patient_address",
      "patient.patient_age",
      "patient.patient_gender",
      "patient.patient_phone_number",
      "patient.patient_email",
      "patient.status"
    ],
    joinStatements: [],
    sortableAttributes: [
      "patient.patient_id",
      "patient.patient_name",
      "patient.patient_address",
      "patient.patient_age",
      "patient.patient_gender",
      "patient.patient_phone_number",
      "patient.patient_email",
      "patient.status"
    ],
    filterableAttributes: [
      {
        column: "patient.patient_id",
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
        column: "patient.patient_name",
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
        column: "patient.patient_address",
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
      },
      {
        column: "patient.patient_age",
        operations: [
          FILTERS.equals,
          FILTERS.notEquals,
          FILTERS.greaterThan,
          FILTERS.greaterThanOrEqual,
          FILTERS.lessThan,
          FILTERS.lessThanOrEqual,
          FILTERS.isNull,
          FILTERS.isNotNull,
          FILTERS.in,
          FILTERS.notIn,
          FILTERS.between
        ]
      },
      {
        column: "patient.patient_gender",
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
      },
      {
        column: "patient.patient_phone_number",
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
        column: "patient.patient_email",
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
      },
      {
        column: "patient.status",
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

module.exports = getPatient;
