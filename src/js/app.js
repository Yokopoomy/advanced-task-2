export default function getSpecialAttack(object) {
  const { special } = object;

  if (!special) {
    return 'Отсутствует поле special';
  }

  if (special.length === 0) {
    return 'Нет спец. атак';
  }

  const enhancedSpecial = special.map((item) => ({
    ...item,
    description: item.description || 'Описание недоступно',
  }));

  return enhancedSpecial;
}
