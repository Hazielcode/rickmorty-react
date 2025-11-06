interface Props {
  title: string;
  subtitle?: string;
  img?: string;
  footer?: string;
}

export default function Card({ title, subtitle, img, footer }: Props) {
  return (
    <div className="card h-100 shadow-sm">
      {img && <img src={img} className="card-img-top" alt={title} loading="lazy" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {subtitle && <p className="card-text text-muted mb-0">{subtitle}</p>}
      </div>
      {footer && <div className="card-footer small text-muted">{footer}</div>}
    </div>
  );
}
