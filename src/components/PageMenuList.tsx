import React from "react";
import { Link, List, ListItem } from "@mui/material";

import PageBody2 from "./PageBody2";

export interface PageMenuInterface {
  title: string;
  href: string;
}

export interface IPageMenuListProps {
  menus: PageMenuInterface[];
}

export function PageMenuList(props: IPageMenuListProps) {
  return (
    <List>
      {props?.menus?.map((menu, index) => (
        <ListItem key={index} sx={{ paddingLeft: 0 }}>
          <Link href={menu?.href}>
            <PageBody2>{menu?.title}</PageBody2>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default PageMenuList;
