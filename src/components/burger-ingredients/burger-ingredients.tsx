<<<<<<< HEAD
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
=======
import { useState, useRef, useEffect, FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { TTabMode } from '@utils-types';
import { BurgerIngredientsUI } from '../ui/burger-ingredients';

export const BurgerIngredients: FC = () => {
  /** TODO: взять переменные из стора */
  const buns = [];
  const mains = [];
  const sauces = [];

  const [currentTab, setCurrentTab] = useState<TTabMode>('bun');
  const titleBunRef = useRef<HTMLHeadingElement>(null);
  const titleMainRef = useRef<HTMLHeadingElement>(null);
  const titleSaucesRef = useRef<HTMLHeadingElement>(null);

  const [bunsRef, inViewBuns] = useInView({
    threshold: 0
  });

  const [mainsRef, inViewFilling] = useInView({
    threshold: 0
  });

  const [saucesRef, inViewSauces] = useInView({
    threshold: 0
  });

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab('bun');
    } else if (inViewSauces) {
      setCurrentTab('sauce');
    } else if (inViewFilling) {
      setCurrentTab('main');
    }
  }, [inViewBuns, inViewFilling, inViewSauces]);

  const onTabClick = (tab: string) => {
    setCurrentTab(tab as TTabMode);
    if (tab === 'bun')
      titleBunRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'main')
      titleMainRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'sauce')
      titleSaucesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return null;

  return (
    <BurgerIngredientsUI
      currentTab={currentTab}
      buns={buns}
      mains={mains}
      sauces={sauces}
      titleBunRef={titleBunRef}
      titleMainRef={titleMainRef}
      titleSaucesRef={titleSaucesRef}
      bunsRef={bunsRef}
      mainsRef={mainsRef}
      saucesRef={saucesRef}
      onTabClick={onTabClick}
    />
  );
};
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
