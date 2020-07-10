const menuOptions = [
  { link: '/pizzas/list', text: 'Show Pizzas Team One', icon: 'local_pizza' },
  { link: '/pizzas/add', text: 'Add Pizza', icon: 'add_circle' },
];

export const menuOptionsToken = 'MENU_OPTIONS';

export const menuOptionsProvider = {
  provide: menuOptionsToken,
  useValue: menuOptions,
};
