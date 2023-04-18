import { SortItem, SortPropertyEnum } from "../types";
import { ICategoryCard } from "../@components/CategoryCard";
import { IProductContainer } from "../@components/ProductContainer";
import {
  capacitor,
  resistor,
  var_resistor,
  inductor,
  facebook,
  twitter,
  linkedin,
  telegram,
} from "../assets";

export const socialMediaLinks = [
  { name: "facebook", imageUrl: facebook, link: "https://www.facebook.com/" },
  { name: "twitter", imageUrl: twitter, link: "https://twitter.com/" },
  { name: "linkedin", imageUrl: linkedin, link: "https://www.linkedin.com/" },
  { name: "telegram", imageUrl: telegram, link: "https://web.telegram.org/" },
];

export const menuLinks = [
  { text: "home", link: "/" },
  { text: "profile", link: "/profile" },
  { text: "contacts", link: "/contacts" },
];

export const categories: ICategoryCard[] = [
  { text: "capacitors", link: "c/capacitors", imageUrl: capacitor },
  { text: "resistors", link: "c/resistors", imageUrl: resistor },
  {
    text: "variable resistors",
    link: "c/var-resistors",
    imageUrl: var_resistor,
  },
  { text: "inductors", link: "c/inductors", imageUrl: inductor },
];

const sortList: SortItem[] = [
  { text: "rating ↑", value: SortPropertyEnum.RATING_DESC },
  { text: "rating ↓", value: SortPropertyEnum.RATING_ASC },
  { text: "price ↑", value: SortPropertyEnum.PRICE_DESC },
  { text: "price ↓", value: SortPropertyEnum.PRICE_ASC },
];

export const pagesData: {
  [productName: string]: IProductContainer;
} = {
  capacitors: {
    title: "Capacitors",
    productName: "capacitors",
    filters: [
      {
        text: "type",
        property: "type",
        options: [
          { text: "all", value: "all" },
          { text: "ceramic", value: "ceramic" },
          { text: "aluminium", value: "aluminium" },
          { text: "film", value: "film" },
        ],
      },
      {
        text: "sort by",
        property: "sortBy",
        options: sortList,
      },
    ],
  },

  resistors: {
    title: "Resistors",
    productName: "resistors",
    filters: [
      {
        text: "type",
        property: "type",
        options: [
          { text: "all", value: "all" },
          { text: "through hole (film)", value: "film" },
          { text: "adjustable", value: "adjustable" },
        ],
      },
      {
        text: "sort by",
        property: "sortBy",
        options: sortList,
      },
    ],
  },

  var_resistors: {
    title: "Variable resistors",
    productName: "var-resistors",
    filters: [
      {
        text: "type",
        property: "type",
        options: [
          { text: "all", value: "all" },
          { text: "potentiometers", value: "potentiometers" },
          {
            text: "potentiometr acc.",
            value: "potentiometer-accessories",
          },
          {
            text: "rheostats",
            value: "rheostats",
          },
          {
            text: "rheostat acc.",
            value: "rheostat-accessories",
          },
          {
            text: "trimmers",
            value: "trimmers",
          },
          {
            text: "trimmer acc.",
            value: "trimmer-accessories",
          },
        ],
      },
      {
        text: "sort by",
        property: "sortBy",
        options: sortList,
      },
    ],
  },

  inductors: {
    title: "Inductors",
    productName: "inductors",
    filters: [
      {
        text: "type",
        property: "type",
        options: [
          { text: "all", value: "all" },
          { text: "leaded (power)", value: "leaded" },
          { text: "surface mount", value: "surface" },
          { text: "coupled", value: "coupled" },
        ],
      },
      {
        text: "sort by",
        property: "sortBy",
        options: sortList,
      },
    ],
  },
};
