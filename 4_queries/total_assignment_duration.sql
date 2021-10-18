SELECT assignments.day, count (assignments) as number_of_assignments, sum (duration) as duration
FROM assignments
GROUP BY assignments.day
ORDER BY number_of_assignments DESC;