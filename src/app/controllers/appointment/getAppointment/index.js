const { sql } = require("~root/lib/database");
const { paginate, FILTERS } = require("~root/lib/paginate");

const getAppointment = async (req, res) => {
  const resultset = await paginate({
    basePath: req.path,
    baseTable: "appointment",
    selectFields: [
      "appointment.appointment_id",
      "appointment.patient_id",
      "appointment.doctor_id",
      "appointment.slot_id",
      "appointment.appointment_date",
      "appointment.status"
    ],
    joinStatements: [],
    sortableAttributes: [
      "appointment.appointment_id",
      "appointment.patient_id",
      "appointment.doctor_id",
      "appointment.slot_id",
      "appointment.appointment_date",
      "appointment.status"
    ],
    filterableAttributes: [
      {
        column: "appointment.appointment_id",
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
        column: "appointment.patient_id",
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
        column: "appointment.doctor_id",
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
        column: "appointment.slot_id",
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
        column: "appointment.appointment_date",
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
        column: "appointment.status",
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

module.exports = getAppointment;
