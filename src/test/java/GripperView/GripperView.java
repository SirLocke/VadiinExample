package GripperView;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the gripper-view template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("gripper-view")
@JsModule("./src/views/gripper-view.js")
public class GripperView extends PolymerTemplate<GripperView.GripperViewModel> {

    /**
     * Creates a new GripperView.
     */
    public GripperView() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between GripperView and gripper-view
     */
    public interface GripperViewModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
