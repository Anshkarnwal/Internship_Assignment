import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropTypes from 'prop-types';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("calendarEvents");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  
  DayCell.propTypes = {
    day: PropTypes.instanceOf(Date).isRequired,
    addEvent: PropTypes.func.isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ),
    moveEvent: PropTypes.func.isRequired,
  };
  
  Event.propTypes = { 
    event: PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  };

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const addEvent = (day) => {
    const newEvent = {
      id: Date.now(),
      date: format(day, "yyyy-MM-dd"),
      color: `hsl(${Math.random() * 360}, 100%, 75%)`,
    };
    setEvents([...events, newEvent]);
  };

  const moveEvent = (id, newDate) => {
    setEvents(events.map((e) => (e.id === id ? { ...e, date: newDate } : e)));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="calendar">
        <div className="toolbar">
          <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}>
            Previous
          </button>
          <h2>{format(currentMonth, "MMMM yyyy")}</h2>
          <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}>
            Next
          </button>
        </div>
        <div className="grid">
          {daysInMonth.map((day) => (
            <DayCell key={day} day={day} addEvent={addEvent} events={events} moveEvent={moveEvent} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

const DayCell = ({ day, addEvent, events = [], moveEvent }) => {
  const [, drop] = useDrop({
    accept: "event",
    drop: (item) => moveEvent(item.id, format(day, "yyyy-MM-dd")),
  });

  return (
    <div ref={drop} className="day-cell" onDoubleClick={() => addEvent(day)}>
      <span className={format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd") ? "highlight" : ""}>
        {format(day, "d")}
      </span>
      {(events || []).filter((e) => e.date === format(day, "yyyy-MM-dd")).map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

const Event = ({ event }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "event",
    item: { id: event.id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  return (
    <div ref={drag} className="event" style={{ backgroundColor: event?.color || "gray", opacity: isDragging ? 0.5 : 1 }}>
      Event
    </div>
  );
};

export default Calendar;
