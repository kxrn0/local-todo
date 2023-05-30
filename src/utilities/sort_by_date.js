export default function sort_by_date(objects, order) {
  return objects
    .slice()
    .sort(
      (a, b) => order * (a.lastUpdated.valueOf() - b.lastUpdated.valueOf())
    );
}
