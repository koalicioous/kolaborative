import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Talent } from '../../lib/newProject/data/project';
import TalentItem from './project-create-talents-item';

interface ProjectDetailTalentProps {
  talents: Talent[]
}

export default function ProjectDetailTalent({ talents }: ProjectDetailTalentProps) {
  return (
    <div className="max-w-lg mx-auto bg-white border-t-2">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="text-xs font-bold text-blue-700">
            Required Talents
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          {
            talents.length > 0
            && (
              talents.map((talent: Talent) => (
                <TalentItem talent={talent} key={talent.id} />
              ))
            )
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
