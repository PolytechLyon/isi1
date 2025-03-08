import useClickCoordinates from "./useClickCoordinates.js";

function style({ removed }) {
    return {
        'text-decoration': removed ? 'line-through' : undefined,
    }
}

const AppHistory = {
    template: `
      <h2>History</h2>
      <ol>
        <li
          v-for="coordinate in history" :key="coordinate.key"
          :class="coordinate">({{ coordinate.x }}, {{ coordinate.y }})</li>
      </ol>
    `,
    setup() {
        const { history } = useClickCoordinates();
        return { history, style };
    },
}

export default AppHistory;
