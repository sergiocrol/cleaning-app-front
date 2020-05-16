export const calculateTotalDuration = (rooms) => {
  return rooms.reduce((totalDuration, currentRoom) => totalDuration + currentRoom.duration, 0);
}

export const calculateRoomDuration = (rooms, others, squareMeters) => {
  const { kitchen, terrace, room, bathroom } = rooms;
  const { pets, kids } = others;
  const minutesRoom = squareMeters / 2;
  const baseTime = !pets && !kids ? minutesRoom : pets ? kids ? minutesRoom + 10 : minutesRoom + 5 : minutesRoom + 5;
  return [
    { type: 'kitchen', duration: (kitchen * 1.5) * baseTime, number: kitchen },
    { type: 'terrace', duration: terrace * baseTime, number: terrace },
    { type: 'bathroom', duration: (bathroom * 1.5) * baseTime, number: bathroom },
    { type: 'room', duration: room * baseTime, number: room }
  ]
}