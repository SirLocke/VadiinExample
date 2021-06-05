package com.vaadin.training.intro;

import java.lang.reflect.Constructor;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;


class ProductForm extends VerticalLayout{
    public ProductForm(){
add(new TextField("name"));
add(new TextArea("description")) ;


NumberField price = new NumberField("Price");
price.setSuffixComponent(new Span("€"));
price.setStep(0.01);
add(price);
add(new DatePicker("Available"));

ComboBox<String> category = new ComboBox<>("Category");
category.setItems("A", "B", "C");
add(category);

Button save = new Button("save");
save.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

Button cancel = new Button("cancel");
HorizontalLayout buttons = new HorizontalLayout(save, cancel);
add(buttons);

}}