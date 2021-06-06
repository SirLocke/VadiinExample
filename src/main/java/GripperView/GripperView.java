package GripperView;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

@Tag("gripper-view")
@JsModule("./src/views/gripper-view.js")
@Route( value = "gripper")
@PageTitle("Gripper")

public class GripperView extends PolymerTemplate<GripperView.GripperViewModel> {


    @Id("vaadinButton1")
    private Button vaadinButton1;

    public GripperView() {
        // You can initialise any data required for the connected UI components here.
        vaadinButton1.addClickListener( e ->   vaadinButton1.getUI().ifPresent(ui -> ui.navigate(""))  );


    }

    public interface GripperViewModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}