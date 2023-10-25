export default function getSpecialAttack(object) {
  if ('special' in object) {
    const { special } = object;
    if (special.length === 0) {
      return 'Нет спец. атак';
    }
    for (let i = 0; i < special.length; i += 1) {
      if (!('description' in special[i])) {
        special[i].description = 'Описание недоступно';
      }
    }
    return special;
  }
  return 'Отсутствует поле special';
}
