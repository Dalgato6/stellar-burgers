import { FC, useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BurgerIngredientsUI } from '../ui/burger-ingredients';
import { useAppSelector } from '../../services/store';
import { TIngredient } from '@utils-types';

// Определяем тип для табов
type IngredientTab = 'bun' | 'main' | 'sauce';

const ingredientFilters = {
  bun: (item: TIngredient) => item.type === 'bun',
  main: (item: TIngredient) => item.type === 'main',
  sauce: (item: TIngredient) => item.type === 'sauce'
};

export const BurgerIngredients: FC = () => {
  const { ingredients } = useAppSelector((state) => state.ingredients);
  const [activeTab, setActiveTab] = useState<IngredientTab>('bun');
  
  // Refs для заголовков секций
  const sectionRefs = {
    bun: useRef<HTMLHeadingElement>(null),
    main: useRef<HTMLHeadingElement>(null),
    sauce: useRef<HTMLHeadingElement>(null)
  };

  // Фильтрация ингредиентов
  const filteredIngredients = {
    bun: ingredients.filter(ingredientFilters.bun),
    main: ingredients.filter(ingredientFilters.main),
    sauce: ingredients.filter(ingredientFilters.sauce)
  };

  // Наблюдатели за видимостью секций
  const [bunSection, isBunVisible] = useInView({ threshold: 0 });
  const [mainSection, isMainVisible] = useInView({ threshold: 0 });
  const [sauceSection, isSauceVisible] = useInView({ threshold: 0 });

  // Автоматическое переключение табов при скролле
  useEffect(() => {
    if (isBunVisible) {
      setActiveTab('bun');
    } else if (isSauceVisible) {
      setActiveTab('sauce');
    } else if (isMainVisible) {
      setActiveTab('main');
    }
  }, [isBunVisible, isMainVisible, isSauceVisible]);

  // Обработчик клика по табу
  const scrollToSection = (tab: string) => {
    const ingredientTab = tab as IngredientTab;
    setActiveTab(ingredientTab);
    const currentRef = ingredientTab === 'bun' 
      ? sectionRefs.bun 
      : ingredientTab === 'main' 
        ? sectionRefs.main 
        : sectionRefs.sauce;
    currentRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <BurgerIngredientsUI
      currentTab={activeTab}
      buns={filteredIngredients.bun}
      mains={filteredIngredients.main}
      sauces={filteredIngredients.sauce}
      titleBunRef={sectionRefs.bun}
      titleMainRef={sectionRefs.main}
      titleSaucesRef={sectionRefs.sauce}
      bunsRef={bunSection}
      mainsRef={mainSection}
      saucesRef={sauceSection}
      onTabClick={scrollToSection}
    />
  );
};