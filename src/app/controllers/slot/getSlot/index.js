const { sql } = require("~root/lib/database");
const { paginate, FILTERS } = require("~root/lib/paginate");

const getSlot = async (req, res) => {
  const resultset = await paginate({
    basePath: req.path,
    baseTable: "slot",
    selectFields: [
      "slot.slot_id",
      "slot.doctor_id",
      "slot.start_time",
      "slot.end_time",
      "slot.availability"
    ],
    joinStatements: [],
    sortableAttributes: [
      "slot.slot_id",
      "slot.doctor_id",
      "slot.start_time",
      "slot.end_time",
      "slot.availability"
    ],
    filterableAttributes: [
      {
        column: "slot.slot_id",
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
        column: "slot.doctor_id",
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
        column: "slot.start_time",
        operations: [
          FILTERS.equals,
          FILTERS.notEquals,
          FILTERS.in,
          FILTERS.notIn,
          FILTERS.isDateAfter,
          FILTERS.isDateOnOrAfter,
          FILTERS.isDateBefore,
          FILTERS.isDateOnOrBefore,
          FILTERS.isDateBetween
        ]
      },
      {
        column: "slot.end_time",
        operations: [
          FILTERS.equals,
          FILTERS.notEquals,
          FILTERS.in,
          FILTERS.notIn,
          FILTERS.isDateAfter,
          FILTERS.isDateOnOrAfter,
          FILTERS.isDateBefore,
          FILTERS.isDateOnOrBefore,
          FILTERS.isDateBetween
        ]
      },
      {
        column: "slot.availability",
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

module.exports = getSlot;
