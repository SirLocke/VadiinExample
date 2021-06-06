package mainView;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.charts.model.Navigator;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

@Tag("main-view")
@JsModule("./src/views/main-view.js")
@Route("")
public class MainView extends PolymerTemplate<MainView.MainViewModel> {

    Navigator navigator;
    @Id("vaadinButton")
    private Button vaadinButton;

    public MainView() {
        // You can initialise any data required for the connected UI components here.
        vaadinButton.addClickListener( e ->   vaadinButton.getUI().ifPresent(ui -> ui.navigate("gripper"))  );
    }

    public interface MainViewModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }

}